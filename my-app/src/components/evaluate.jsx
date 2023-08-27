import { Box, Button, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";




const columns = [
  {
    field: "id",
    headerName: "Sr No.",
    width: 100,
    sortable: false,
    flex: 0.25,
  },
  {
    field: "roll_no",
    headerName: "Roll Number",
    width: 250,
    sortable: false,
    flex: 1,
  },
  {
    field: "name",
    headerName: "Student Name",
    width: 250,
    sortable: false,
    flex: 1,
  },

  {
    field: "email",
    headerName: "Email-ID",
    type: "email",
    width: 250,
    sortable: false,
    flex: 1,
  },
  {
    field: "department",
    headerName: "Department name",

    sortable: false,
    width: 250,
    flex: 1,
  },
  {
    field: "evaluate",
    headerName: "Evaluate",
    sortable: false,
    width: 250,
    flex: 1,
    renderCell: (params) => (
      <Button variant="contained" href = "/assessment" target="_blank">
        {/* href={"/assess?id=" + params.row.roll_no} */}
        Evaluate / Edit
      </Button>
    ),
  },
];

const rows = [
  {
    id: 1,
    roll_no: "001",
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Engineering",
  },
  {
    id: 2,
    roll_no: "002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    department: "Marketing",
  },
  {
    id: 3,
    roll_no: "003",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    department: "Finance",
  },
  {
    id: 4,
    roll_no: "004",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    department: "HR",
  },
  {
    id: 5,
    roll_no: "005",
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    department: "Sales",
  },
  {
    id: 6,
    roll_no: "006",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    department: "Operations",
  },
  {
    id: 7,
    roll_no: "007",
    name: "Emily Lee",
    email: "emily.lee@example.com",
    department: "Research",
  },
  {
    id: 8,
    roll_no: "008",
    name: "David White",
    email: "david.white@example.com",
    department: "Customer Support",
  },
  {
    id: 9,
    roll_no: "009",
    name: "Olivia Garcia",
    email: "olivia.garcia@example.com",
    department: "Product Development",
  },
  {
    id: 10,
    roll_no: "010",
    name: "Daniel Martinez",
    email: "daniel.martinez@example.com",
    department: "Quality Assurance",
  },
];



export default function Evaluate() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center !important",
          alignItems: "center !important",
          marginBottom: "15px",
        }}
      >
        <Typography variant="h4">Form assessment page</Typography>
      </Box>

      <Paper elevation={4} sx={{ height: "85vh", mt: "2" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Paper>
   </Box>
  );
}
