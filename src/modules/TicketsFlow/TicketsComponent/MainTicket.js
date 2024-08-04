import React, { useMemo, useState } from "react";
import { Box, Button, Checkbox } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import FilterCard from "./FilterCard";

// Hardcoded data
const data = [
  {
    id: "1",
    firstName: "Dylan",
    middleName: "Sprouse",
    lastName: "Murray",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
    country: "United States",
  },
  {
    id: "2",
    firstName: "Raquel",
    middleName: "Hakeem",
    lastName: "Kohler",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
    country: "United States",
  },
  {
    id: "3",
    firstName: "Ervin",
    middleName: "Kris",
    lastName: "Reinger",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
    country: "United States",
  },
  {
    id: "4",
    firstName: "Brittany",
    middleName: "Kathryn",
    lastName: "McCullough",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
    country: "United States",
  },
  {
    id: "5",
    firstName: "Branson",
    middleName: "John",
    lastName: "Frami",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
    country: "United States",
  },
  {
    id: "6",
    firstName: "Brandon",
    middleName: "Joe",
    lastName: "Kutch",
    address: "5660 Kuhn Village",
    city: "Vancouver",
    state: "British Columbia",
    country: "Canada",
  },
];

const MainTicket = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAllChange = (event) => {
    if (event.target.checked) {
      setSelectedIds(data.map((row) => row.id)); // Select all
    } else {
      setSelectedIds([]); // Deselect all
    }
  };

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: "select",
        header: ({ table }) => (
          <Checkbox
            checked={selectedIds.length === data.length}
            onChange={handleSelectAllChange}
          />
        ),
        size: 50,
        Cell: ({ row }) => (
          <Checkbox
            checked={selectedIds.includes(row.original.id)}
            onChange={() => handleCheckboxChange(row.original.id)}
          />
        ),
      },
      {
        accessorKey: "id",
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "middleName",
        header: "Middle Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 300,
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
      {
        accessorKey: "country",
        header: "Country",
      },
      {
        accessorKey: "actions", // New accessor key for actions
        header: "Actions",
        size: 100,
        enableColumnPinning: true, // Enable column pinning for this column
        Cell: ({ row }) => (
          <Button
            variant="contained"
            onClick={() => handleActionClick(row.original)}
          >
            Action
          </Button>
        ),
      },
    ],
    [selectedIds]
  );

  const handleActionClick = (rowData) => {
    // Define what happens when the action button is clicked
    console.log("Action clicked for:", rowData);
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableSorting
      enableColumnActions
      enableColumnFilters
      enablePagination
      enableRowActions={false}
      initialState={{
        columnPinning: {
          right: ["actions"],
          left: ["select"],
        },
      }}
    />
  );
};

export default MainTicket;
