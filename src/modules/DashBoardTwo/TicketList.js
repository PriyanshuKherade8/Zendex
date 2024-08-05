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
  Button,
} from "@mui/material";
import styled from "styled-components";

const columns = [
  { id: "id", label: "Ticket ID", minWidth: 100 },
  { id: "subject", label: "Subject", minWidth: 200 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "priority", label: "Priority", minWidth: 100 },
  { id: "assignee", label: "Assignee", minWidth: 200 },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
];

const rows = [
  // Sample data
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
  // border: "1px solid red",
  height: "100%",
});

const TicketList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TicketListContainer variant="outlined">
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
                          {column.id === "actions" ? (
                            <div>
                              <Button
                                variant="contained"
                                color="primary"
                                size="small"
                              >
                                View
                              </Button>
                            </div>
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
