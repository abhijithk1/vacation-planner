import { Link, Typography } from "@mui/material";

const CopyRight = () => {
    return(
        <Typography variant="body2"
        sx={{
            mt: 8,
            mb: 4,
            color: "text.secondary",
            align: "center",
        }}>
            Copyright ©
            <Link href="#" variant="body2" color="inherit">Vacation Planner</Link> 2023
        </Typography>
    );
}

export default CopyRight;