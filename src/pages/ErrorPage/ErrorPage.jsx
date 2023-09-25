import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    const boxStyles = {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }

    return (
        <Box sx={boxStyles}>
            <Typography component='h1' variant="h1" >Oops!</Typography>
            <Typography variant="h5" sx={{padding: 4}}>Sorry, an unexpected error has occurred.</Typography>
            <Typography variant="inherit">
               {error.statusText || error.message}
            </Typography>
        </Box>
    );
}

export default ErrorPage;