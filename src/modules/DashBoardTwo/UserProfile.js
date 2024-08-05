import React from "react";
import { Box, Typography, Avatar, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
}));

const UserProfile = ({ user }) => {
  if (!user) return <div>Select a user to view profile</div>;

  return (
    <Container>
      <Avatar
        src={user?.avatar}
        alt={user?.name}
        sx={{ width: 100, height: 100 }}
      />
      <Typography variant="h5">{user?.name}</Typography>
      <Typography variant="body1">{user?.email}</Typography>
      <Typography variant="body1">{user?.phone}</Typography>
      <Typography variant="body1">{user?.company}</Typography>
    </Container>
  );
};

// Sample user data
const sampleUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+123456789",
  company: "Example Corp",
  avatar: "https://via.placeholder.com/100",
};

export default UserProfile;
