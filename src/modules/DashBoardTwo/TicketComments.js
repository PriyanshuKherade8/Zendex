import React from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";
import Textarea from "../UIComp/textarea/Textarea";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  fontFamily: "system-ui",
}));

const CommentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  fontFamily: "system-ui",
}));

const CustomTypography = styled(Typography)({
  fontFamily: "system-ui",
  fontSize: "14px",
});

const CustomSubtitleTypography = styled(Typography)({
  fontFamily: "system-ui",
  fontSize: "17px",
  fontWeight: "600",
});

const CustomCaptionTypography = styled(Typography)({
  fontFamily: "system-ui",
  fontSize: "12px",
  color: "gray",
});

const TicketComments = () => {
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

  return (
    <Container>
      <CustomSubtitleTypography variant="h5">Comments</CustomSubtitleTypography>
      {comments.map((comment, index) => (
        <CommentBox key={index}>
          <CustomSubtitleTypography variant="subtitle1">
            {comment.author}
          </CustomSubtitleTypography>
          <CustomTypography variant="body2">{comment.text}</CustomTypography>
          <CustomCaptionTypography variant="caption">
            {comment.timestamp}
          </CustomCaptionTypography>
        </CommentBox>
      ))}
      <Grid item lg={12} md={12} xs={12} sm={12}>
        <Textarea
          label="Add comments"
          id="queryTitle"
          name="queryTitle"
          placeholder="Enter your query title here..."
        />
      </Grid>
      <Grid item lg={12} md={12} xs={12} sm={12}>
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="primary">
            Add Comment
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default TicketComments;
