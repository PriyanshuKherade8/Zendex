import React from "react";
import styled from "styled-components";
import { Box, Typography, Avatar, Link, Chip, Grid } from "@mui/material";
import { AttachFile } from "@mui/icons-material";

const Container = styled(Box)`
  font-family: "system-ui";
  background-color: #fff;
  padding: 20px;
`;

const Label = styled(Typography)`
  font-weight: bold;
  margin-right: 8px;
`;

const AvatarName = styled(Box)`
  display: flex;
  align-items: center;
`;

const TaskStatus = styled(Chip)`
  background-color: ${({ status }) =>
    status === "In Progress" ? "#ffa500" : "#28a745"};
  color: #fff;
  font-weight: bold;
`;

const DocumentLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const TaskDetails = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Ticket ID:</Label>
          <Typography variant="body2">12378217401</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Task Type:</Label>
          <Typography variant="body2">IT Issue</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Created On:</Label>
          <Typography variant="body2">Nov 1, 2020</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Employee ID:</Label>
          <AvatarName>
            <Avatar alt="James Warren" src="/path/to/avatar.jpg" />
            <Typography variant="body2" style={{ marginLeft: "8px" }}>
              James Warren
            </Typography>
          </AvatarName>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Location Store:</Label>
          <Typography variant="body2">Store XYZ Name</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Employee Contact:</Label>
          <Typography variant="body2">+1 382478340</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Status:</Label>
          <TaskStatus status="In Progress" label="In Progress" />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Priority:</Label>
          <Typography
            variant="body2"
            style={{ color: "#d9534f", fontWeight: "bold" }}
          >
            High
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Description:</Label>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Assigned To:</Label>
          <AvatarName>
            <Avatar alt="Sam Andrew" src="/path/to/avatar.jpg" />
            <Typography variant="body2" style={{ marginLeft: "8px" }}>
              Sam Andrew
            </Typography>
          </AvatarName>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Documents:</Label>
          <DocumentLink href="/path/to/Document.doc">
            <AttachFile /> Document.doc ,
          </DocumentLink>
          <DocumentLink href="/path/to/Document.jpg">
            <AttachFile /> Document.jpg
          </DocumentLink>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Label variant="body1">Due Date:</Label>
          <Typography variant="body2">Nov 4, 2020</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskDetails;
