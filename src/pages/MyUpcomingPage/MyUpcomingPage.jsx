import { Box, Divider, Grid, Typography } from "@mui/material";
import { listMyUpcomingVacations } from "./service";
import CommonCard from "../../components/common/CommonCard/CommonCard";
import HomePage from "../../components/HomePage/HomePage";
import { useEffect, useState } from "react";

const MyUpcomingPage = () => {
  const [vacationList, setVacationList] = useState([]);

  const fetchVacationList = async () => {
    const response = await listMyUpcomingVacations();
    console.log("response: ", response);

    if (response && response.data) {
      const list = response.data;
      setVacationList(list);
    }

    if (response.error) {
      console.error("error : ", response.error);
    }
  };

  useEffect(()=> {
    fetchVacationList()
  },[])

  console.log("list : ", vacationList)

  return (
    <Box sx={{ mt: 12, ml: 40}}>
      <HomePage />
      <Typography variant="h4" component="div" >My Upcoming Vacations</Typography>
      <Divider />
      <Grid container spacing={4} sx={{mt: 2}}>
        <CommonCard lists={vacationList} type="personal"/>
      </Grid>
    </Box>
  );
};

export default MyUpcomingPage;
