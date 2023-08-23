import React from "react";
import dayjs from "dayjs";
import { Box, Paper, TextField, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const rows = [
  {
    id: 1,
    category: "Category A",
    roll_no: "160101",
    name: "John Doe",
    organization: "Company X",
    date: "2023-08-23",
    time: "09:00 AM",
    venue: "Venue 1",
  },
  {
    id: 2,
    category: "Category B",
    roll_no: "160102",
    name: "Jane Smith",
    organization: "Company Y",
    date: "2023-08-24",
    time: "10:30 AM",
    venue: "Venue 2",
  },
  {
    id: 3,
    category: "Category A",
    roll_no: "160103",
    name: "Bob Johnson",
    organization: "Company Z",
    date: "2023-08-25",
    time: "02:15 PM",
    venue: "Venue 3",
  },
  {
    id: 4,
    category: "Category C",
    roll_no: "160104",
    name: "Alice Brown",
    organization: "Company W",
    date: "2023-08-26",
    time: "11:45 AM",
    venue: "Venue 4",
  },
  {
    id: 5,
    category: "Category B",
    roll_no: "160105",
    name: "Eve Green",
    organization: "Company V",
    date: "2023-08-27",
    time: "03:30 PM",
    venue: "Venue 5",
  },
];

export default function InterviewSchedule() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <Box>
      <Typography
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"} 
        variant="h3"
      >
        Interview Scheduler
      </Typography>

      <Box mt={2}>
        <Paper elevation={5} sx={{ height: "85%", padding: "1.5em" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr No.</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Roll Number</TableCell>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Organization Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Venue</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.roll_no}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.organization}</TableCell>
                    <TableCell>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Controlled picker"
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                        />
                      </LocalizationProvider>
                    </TableCell>
                    <TableCell>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          label="Controlled picker"
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                        />
                      </LocalizationProvider>
                    </TableCell>
                    <TableCell>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="venue"
                        label="Venue"
                        name="venue"
                        autoComplete="venue"
                        autoFocus
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}
