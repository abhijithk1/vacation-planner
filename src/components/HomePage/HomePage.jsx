import { Box } from "@mui/material";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            <NavBar />
        </Box>
    );
}

export default HomePage;