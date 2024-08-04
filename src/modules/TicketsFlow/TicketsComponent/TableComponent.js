// TableComponent.jsx
import React from "react";
import { useTable } from "react-table";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import styled from "styled-components";

const StyledTable = styled(Table)`
  margin: 20px;
`;

const columns = [
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Requester",
    accessor: "requester",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const data = [
  {
    subject: "Request for Prathamesh Kherade",
    requester: "Prathamesh Kherade",
    status: "Pending",
  },
  // Add more rows as needed
];

const TableComponent = ({ toggleDrawer }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Box>
      <StyledTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} onClick={toggleDrawer}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default TableComponent;
