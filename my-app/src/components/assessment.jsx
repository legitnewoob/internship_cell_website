import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const details = {
  name: "Raj Agrawal",
  email: "raj.ma@somaiya.edu",
  roll_no: 16010121003,
  dept: "Computer Engineering",
};

const rows = [
  { serialNo: 1, Name: "Weeks of internship done", scoreGiven: 0 },
  { serialNo: 2, Name: "Online Courses Completed till Date", scoreGiven: 0 },
  {
    serialNo: 3,
    Name: "Participation in co-curricular activity",
    scoreGiven: 0,
  },
  { serialNo: 4, Name: "CGPI till VI Sem", scoreGiven: 0 },
  { serialNo: 5, Name: "Industry Profile", scoreGiven: 0 },
  { serialNo: 6, Name: "Nature of work", scoreGiven: 0 },
  { serialNo: 7, Name: "Nature of Internship Offered", scoreGiven: 0 },
  { serialNo: 8, Name: "Overall Impressions", scoreGiven: 0 },
  { serialNo: 9, Name: "Department specific recommendation", scoreGiven: 0 },
];

const menuItems = [];

for (let i = 0; i <= 10; i++) {
  menuItems.push(
    <MenuItem key={i} value={i}>
      {i}
    </MenuItem>
  );
}

export default function Assessment() {
 
  const [data, setData] = useState(rows);

  const handleScoreChange = (event, index) => {
    const updatedData = [...data];
    data[index].scoreGiven = event.target.value;
    setData(updatedData);
    console.log(data);
  };
  return (
    <Box>
      <Paper
        sx={{
          height: "85%",
          padding: "1.5em",
          border: "2px solid black",
          borderRadius: "30px",
        }}
        elevation={5}
      >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h4">Student Details</Typography>
        </Box>

        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://avatarfiles.alphacoders.com/192/192706.jpg"
                  sx={{ width: 160, height: 160 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <List>
                <ListItem>
                  <Typography variant="h6" component={"p"} fontWeight={400}>
                    Name : {details.name}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6" component={"p"} fontWeight={400}>
                    Roll No : {details.roll_no}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6" component={"p"} fontWeight={400}>
                    Email-Id : {details.email}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6" component={"p"} fontWeight={400}>
                    Department : {details.dept}
                  </Typography>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "60px",
                  }}
                  href="./responseform"
                  target="_blank"
                >
                  View Form Response
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "60px",
                    margin: "16px 0",
                  }}
                  href="https://ibb.co/2cpLy9d"
                  target="_blank"
                >
                  View Rubrics
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Box sx={{ marginTop: "2rem" }}>
        <Paper
          sx={{
            height: "85%",
            padding: "1.5em",
            border: "2px solid black",
            borderRadius: "30px",
          }}
          elevation={5}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "10%" }}>Serial No.</TableCell>
                  <TableCell align="center" style={{ width: "75%" }}>
                    Criteria
                  </TableCell>
                  <TableCell align="center" style={{ width: "20%" }}>
                    Score Given
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.serialNo}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.serialNo}</TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: 300, fontSize: "26px" }}
                    >
                      {row.Name}
                    </TableCell>
                    <TableCell align="center">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Score
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Score"
                          value={row.scoreGiven}
                          onChange={(event) => handleScoreChange(event, index)}
                        >
                          console.log(value);
                          {menuItems}
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Button
          variant="contained"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px auto", // To center the button horizontally
            width: "320px", // Set the width as desired
            height: "80px", // Set the height as desired
            borderRadius: "15px", // To make it round
            fontSize: "24px", // Set the font size as desired
            marginTop: "15px",
          }}
        >
          Update Scores
        </Button>
      </Box>
    </Box>
  );
}
