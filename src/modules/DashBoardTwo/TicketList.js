import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const columns = [
  { id: "id", label: "Ticket ID", minWidth: 50 },
  { id: "subject", label: "Subject", minWidth: 220 },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "priority", label: "Priority", minWidth: 100, align: "center" },
  { id: "assignee", label: "Assignee", minWidth: 50 },
  { id: "actions", label: "Actions", minWidth: 50, align: "center" },
];

const rows = [
  {
    id: "12345",
    subject: "Issue with login",
    status: "Open",
    priority: "High",
    assignee: "John Doe",
  },
  {
    id: "12346",
    subject: "Feature request",
    status: "Closed",
    priority: "Low",
    assignee: "Jane Doe",
  },
  {
    id: "123525",
    subject: "Issue with login",
    status: "Open",
    priority: "High",
    assignee: "John Doe",
  },
  {
    id: "125246",
    subject: "Feature request",
    status: "Closed",
    priority: "Low",
    assignee: "Jane Doe",
  },
  {
    id: "123555",
    subject: "Issue with login",
    status: "Open",
    priority: "High",
    assignee: "John Doe",
  },
  {
    id: "125246",
    subject: "Feature request",
    status: "Closed",
    priority: "Low",
    assignee: "Jane Doe",
  },
  {
    id: "12545116",
    subject: "Feature request",
    status: "Closed",
    priority: "Low",
    assignee: "Jane Doe",
  },
  {
    id: "125246",
    subject: "Feature request",
    status: "Closed",
    priority: "Low",
    assignee: "Jane Doe",
  },
  {
    id: "12545116",
    subject: "Feature request",
    status: "Closed",
    priority: "Low",
    assignee: "Jane Doe",
  },
];

const TicketListContainer = styled(Paper)({
  width: "100%",
  overflow: "hidden",
  height: "100%",
  borderRadius: "12px",
});

const getStatusColor = (status) => {
  switch (status) {
    case "Open":
      return "error";
    case "Closed":
      return "success";
    default:
      return "default";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "warning";
    case "Low":
      return "primary";
    default:
      return "default";
  }
};

const TicketList = () => {
  const navigate = useNavigate(); // Get navigate function
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleIconClick = (id) => {
    navigate(`/ticket/${id}`); // Redirect to the desired route, e.g., /ticket/:id
  };

  return (
    <TicketListContainer variant="outlined" style={{ borderRadius: "12px" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "600",
                    color: "blue",
                    fontFamily: "system-ui",
                    fontSize: "15px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "status" ? (
                            <Chip label={value} color={getStatusColor(value)} />
                          ) : column.id === "priority" ? (
                            <Chip
                              label={value}
                              color={getPriorityColor(value)}
                            />
                          ) : column.id === "actions" ? (
                            <IconButton
                              onClick={() => handleIconClick(row.id)} // Call the click handler
                              style={{
                                color: "white",
                                backgroundColor: "darkblue",
                                borderRadius: "50%",
                              }}
                            >
                              <MessageOutlinedIcon style={{ fontSize: 16 }} />
                            </IconButton>
                          ) : column.id === "assignee" ? (
                            <span
                              style={{
                                fontWeight: "500",
                                color: "blue",
                                fontFamily: "system-ui",
                                fontSize: "14px",
                              }}
                            >
                              {value}
                            </span>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TicketListContainer>
  );
};

export default TicketList;
