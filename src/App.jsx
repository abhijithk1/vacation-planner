import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh"
        }}
      >
        <Typography variant="h1" align="center" component="h1">
          Welcome to Vacation Planner
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<LoginIcon />}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      </Box>
    </>
  );
}

export default App;
