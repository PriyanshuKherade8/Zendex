import React from "react";
import styled from "styled-components";
import { Box, Typography, Avatar, Link, Chip, Grid, Card } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import { primaryColor } from "../ThemeColor";

const Container = styled(Card)`
  font-family: "system-ui";
  background-color: #fff;
  padding: 20px;
`;

const Label = styled(Typography)`
  font-family: system-ui !important;
  font-weight: 600 !important;
  color: #03346e;
  font-size: 15px !important;
  margin-right: 8px;
  display: inline;
`;

const Value = styled(Typography)`
  font-family: system-ui !important;
  font-weight: 600 !important;
  color: black;
  font-size: 15px !important;
  margin-right: 8px;
  display: inline;
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
  font-weight: 600 !important;
  font-size: 15px !important;
  cursor: pointer;
`;

const FlexGridItem = styled(Grid)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TaskDetails = () => {
  return (
    <Container variant="outlined">
      <Grid container spacing={2}>
        <FlexGridItem item xs={12} md={6}>
          <Label variant="h5">Ticket ID :</Label>
          <Value variant="body2">12378217401</Value>
        </FlexGridItem>
        <FlexGridItem item xs={12} md={6}>
          <Label variant="body1">Task Type:</Label>
          <Value variant="body2">IT Issue</Value>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={6}>
          <Label variant="body1">Employee ID:</Label>
          <AvatarName>
            <Avatar alt="James Warren" src="/path/to/avatar.jpg" />
            <Value variant="body2" style={{ marginLeft: "8px" }}>
              James Warren
            </Value>
          </AvatarName>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={6}>
          <Label variant="body1">Created On:</Label>
          <Value variant="body2">Nov 1, 2020</Value>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={6}>
          <Label variant="body1">Location Store:</Label>
          <Value variant="body2">Store XYZ Name</Value>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={6}>
          <Label variant="body1">Employee Contact:</Label>
          <Value variant="body2">+1 382478340</Value>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={6}>
          <Label variant="body1">Status:</Label>
          <TaskStatus status="In Progress" label="In Progress" />
        </FlexGridItem>

        <FlexGridItem item xs={12} md={6}>
          <Label variant="body1">Priority:</Label>
          <Value
            variant="body2"
            style={{ color: "#d9534f", fontWeight: "bold" }}
          >
            High
          </Value>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={12}>
          <Label variant="body1">Description:</Label>
          <Value variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Value>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={4}>
          <Label variant="body1">Assigned To:</Label>
          <AvatarName>
            <Avatar alt="Sam Andrew" src="/path/to/avatar.jpg" />
            <Value variant="body2" style={{ marginLeft: "8px" }}>
              Sam Andrew
            </Value>
          </AvatarName>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={12}>
          <Label variant="body1">Documents:</Label>
          <DocumentLink
            // href="/path/to/Document.doc"
            style={{ color: primaryColor }}
          >
            <AttachFile /> Document.doc ,
          </DocumentLink>
          <DocumentLink
            // href="/path/to/Document.jpg"
            style={{ color: primaryColor }}
          >
            <AttachFile /> Document.jpg
          </DocumentLink>
        </FlexGridItem>

        <FlexGridItem item xs={12} md={4}>
          <Label variant="body1">Due Date:</Label>
          <Value variant="body2">Nov 4, 2020</Value>
        </FlexGridItem>
      </Grid>
    </Container>
  );
};

export default TaskDetails;
