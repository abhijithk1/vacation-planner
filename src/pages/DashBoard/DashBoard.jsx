import {
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import HomePage from "../../components/HomePage/HomePage";
// import VacationTable from "../../components/Table/VacationTable";
import React from "react";
import DashBoardCard from "../../components/DashBoardCard/DashBoardCard";
// import { useEffect, useState } from "react";
// import { listVacations } from "./service";

const DashBoard = () => {
  // const [vacationList, setVacationList] = useState([])

  const boxStyles = {
    display: "flex",
    mt: 10,
    ml: 40,
    // alignItems: "center",
    flexDirection: "column",
    width: "100%"
  };

  // useEffect(()=> {
  //   fetchVacationList()
  // },[])

  // console.log("vacation list : ", vacationList)

  return (
    <Box sx={{ display: "flex", flexDirection: "column"}}>
      <HomePage />
      <Box sx={boxStyles}>
        <Typography variant="h4" component="div">My Personal Dashboard</Typography>
        <Divider />
        <DashBoardCard title="personal" />
      </Box>
       <Box sx={{mt: 10, ml: 40}}>
      <Typography variant="h4" component="div">Team Dashboard</Typography>
        <DashBoardCard title="team"/>
      </Box>
    </Box>
  );
};

export default DashBoard;
