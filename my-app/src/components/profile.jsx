import { Box, Paper, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box>
      <Typography
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        variant="h4"
      >
        Profile Page
      </Typography>
      <Box mt={2}>
        <Paper elevation={5} sx={{ height: "85%", padding: "1.5em" }}>
          Hello
        </Paper> 
      </Box>
    </Box>
  );
}
