import React from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";

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

const CommentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const comments = [
  {
    author: "John Doe",
    text: "We are looking into this issue.",
    timestamp: "2024-08-01",
  },
  {
    author: "Jane Doe",
    text: "Issue resolved, please verify.",
    timestamp: "2024-08-02",
  },
];

const TicketComments = () => {
  return (
    <Container>
      <Typography variant="h5">Comments</Typography>
      {comments.map((comment, index) => (
        <CommentBox key={index}>
          <Typography variant="subtitle1">{comment.author}</Typography>
          <Typography variant="body2">{comment.text}</Typography>
          <Typography variant="caption" color="textSecondary">
            {comment.timestamp}
          </Typography>
        </CommentBox>
      ))}
      <TextField
        label="Add a comment"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary">
        Add Comment
      </Button>
    </Container>
  );
};

export default TicketComments;
