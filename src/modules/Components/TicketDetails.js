// // TicketDetails.js
// import React from "react";
// import { Box, Typography, Paper, Avatar, Button, styled } from "@mui/material";

// const Container = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   gap: theme.spacing(2),
//   padding: theme.spacing(2),
//   border: `1px solid ${theme.palette.divider}`,
//   borderRadius: theme.shape.borderRadius,
// }));

// const Conversation = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   gap: theme.spacing(1),
//   marginTop: theme.spacing(2),
// }));

// const Message = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "flex-start",
//   gap: theme.spacing(1),
// }));

// const UserDetails = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
// });

// const TicketDetails = () => {
//   const ticket = {
//     id: 12345,
//     title: "Issue with product functionality",
//     description:
//       "The customer is reporting an issue with the core functionality of our product. They are unable to complete a key task and it is impacting their workflow.",
//     attachments: [
//       /* fake attachment data */
//     ],
//     conversation: [
//       {
//         id: 1,
//         user: "John Doe",
//         message:
//           "Hi, I'm having trouble with the core functionality of your product. Can you please help me resolve this issue?",
//         timestamp: "2 days ago",
//       },
//       {
//         id: 2,
//         user: "Jane Doe",
//         message:
//           "Hi John, I'm sorry to hear you're having trouble. Can you please provide more details about the issue you're facing? I'd be happy to look into this for you.",
//         timestamp: "1 day ago",
//       },
//     ],
//   };

//   return (
//     <Container>
//       <Typography variant="h5">Ticket Details</Typography>
//       <Typography variant="h6">Ticket #{ticket.id}</Typography>
//       <Typography variant="subtitle1">{ticket.title}</Typography>
//       <Typography variant="body1">{ticket.description}</Typography>
//       <Typography variant="body2">Attachments</Typography>
//       {/* Display attachments */}
//       <Conversation>
//         <Typography variant="body2">Conversation</Typography>
//         {ticket.conversation.map((msg) => (
//           <Message key={msg.id}>
//             <Avatar>{msg.user.charAt(0)}</Avatar>
//             <UserDetails>
//               <Typography variant="body2">
//                 <strong>{msg.user}</strong>
//               </Typography>
//               <Typography variant="body2">{msg.message}</Typography>
//               <Typography variant="caption" color="textSecondary">
//                 {msg.timestamp}
//               </Typography>
//             </UserDetails>
//           </Message>
//         ))}
//       </Conversation>
//       <Box>
//         <Button variant="contained" color="primary">
//           Assign
//         </Button>
//         <Button variant="contained" color="success" sx={{ mx: 1 }}>
//           Resolve
//         </Button>
//         <Button variant="contained" color="error">
//           Close
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default TicketDetails;
import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  styled,
  Avatar,
  Paper,
} from "@mui/material";

const Container = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: "auto",
  //   marginTop: theme.spacing(5),
  padding: theme.spacing(2),
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
}));

const TicketDetails = () => {
  const ticket = {
    id: "12345",
    subject: "Issue with product functionality",
    description:
      "The customer is reporting an issue with the core functionality of our product. They are unable to complete a key task and it is impacting their workflow.",
    conversation: [
      {
        name: "John Doe",
        message:
          "Hi, I'm having trouble with the core functionality of your product. Can you please help me resolve this issue?",
        time: "2 days ago",
      },
      {
        name: "Jane Doe",
        message:
          "Hi John, I'm sorry to hear you're having trouble. Can you please provide more details about the issue you're facing? I'd be happy to look into this for you.",
        time: "1 day ago",
      },
    ],
  };

  return (
    <Container>
      <CardHeader
        title={`Ticket #${ticket.id}`}
        subheader={ticket.subject}
        titleTypographyProps={{ variant: "h5", component: "div" }}
        subheaderTypographyProps={{
          variant: "subtitle1",
          color: "textSecondary",
        }}
      />
      <CardContent>
        <Typography variant="body1" paragraph>
          {ticket.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>
          Conversation
        </Typography>
        {ticket.conversation.map((entry, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              p: 2,
              mb: 2,
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
            <Avatar sx={{ mr: 2 }}>{entry.name.charAt(0)}</Avatar>
            <Box>
              <Typography variant="subtitle2">{entry.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {entry.time}
              </Typography>
              <Typography variant="body1" mt={1}>
                {entry.message}
              </Typography>
            </Box>
          </Paper>
        ))}
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}
        >
          <Button variant="outlined" color="primary">
            Assign
          </Button>
          <Button variant="outlined" color="success">
            Resolve
          </Button>
          <Button variant="outlined" color="error">
            Close
          </Button>
        </Box>
      </CardContent>
    </Container>
  );
};

export default TicketDetails;
