import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function Forms() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
        check : check, // Enclose property name in quotes
        department : dept,
        'offer-received' : check2,
        full_time_placement : check3
        // ...
      });
  };


    const [check, setCheck] = React.useState('');

    const handleChange = (event) => {
        setCheck(event.target.value);
    };

    const [dept, setDept] = React.useState('');

    const handleDeptChange = (event) => {
        setDept(event.target.value);
    };

    const [caseValue, setCaseValue] = React.useState('');

    const handleCaseChange = (event) => {
        setCaseValue(event.target.value);
    };

    const [check2, setCheck2] = React.useState('');

    const handleChange2 = (event) => {
        setCheck2(event.target.value);
    };

    const [check3, setCheck3] = React.useState('');

    const handleChange3 = (event) => {
        setCheck3(event.target.value);
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            maxWidth : '85vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <InsertDriveFileIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Internship Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography> Have you read the policy document and attended the webinar?
                </Typography>
                <br/>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Check</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={check}
                label="Check"
                onChange={handleChange}
                >
                <MenuItem value={"1"}>Yes</MenuItem>
                <MenuItem value={"0"}>No</MenuItem>
                </Select>
            </FormControl>
                    
            
              </Grid>
              <Grid item xs={12}>
                
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dept}
                label="Check"
                onChange={handleDeptChange}
                >
                <MenuItem value={"COMP"}>Computer Engineering</MenuItem>
                <MenuItem value={"IT"}>Information Technology</MenuItem>
                <MenuItem value={"EXTC"}>Electronics Engineering and Tele-communications</MenuItem>
                <MenuItem value={"MECH"}>Mechanical Engineering</MenuItem>
                </Select>
            </FormControl>
                    
            
              </Grid>
              <Grid item xs={12}>
                
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Case</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dept}
                label="Check"
                onChange={handleChange}
                >
                <MenuItem value={"1"}>Through College</MenuItem>
                
                </Select>
            </FormControl>
                    
            
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Student Full Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="rollno"
                  label="Student Roll Number"
                  name="rollno"
                  autoComplete="rollnumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile_no"
                  label="Mobile No."
                  name="mobile_no"
                  autoComplete="mobileno"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Is Internship offer received till date?
                </Typography>
                <br/>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Yes / No</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value= {check2}
                label="Offer Received?"
                onChange={handleChange2}
                >
                <MenuItem value={"1"}>Yes</MenuItem>
                <MenuItem value={"0"}>No</MenuItem>
                </Select>
            </FormControl>
                    
            
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="company_name"
                  label="Name of Company"
                  type="name"
                  id="company_name"
                  autoComplete="company_name"
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Monthly Stipend in ₹"
                  type="stipend"
                  name="stipend"
                  id="stipend"
                  autoComplete="stipend"
                />
                
              </Grid>
              <Grid item xs={12}>
                <Typography>Received full time placement from college?
                </Typography>
                <br/>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Yes / No</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value= {check2}
                label="Offer Received?"
                onChange={handleChange3}
                >
                <MenuItem value={"1"}>Yes</MenuItem>
                <MenuItem value={"0"}>No</MenuItem>
                </Select>
            </FormControl>
                    
            
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="ctc"
                  label="Annual CTC"
                  type="ctc"
                  id="ctc"
                  autoComplete="ctc"
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="drive_link"
                  label="Google drive Link"
                  type="link"
                  id="drive_link"
                  autoComplete="drive_link"
                />
                
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Form
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}