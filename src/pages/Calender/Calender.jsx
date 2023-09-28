import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import HomePage from "../../components/HomePage/HomePage";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { submitVacation } from "./service";
import { useNavigate } from "react-router-dom";

const Calender = () => {
  const navigate = useNavigate();

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [title, setTitle] = useState("");
  const [descp, setDescp] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descpChangeHandler = (event) => {
    setDescp(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("state: ", state);
    const response = await submitVacation(title, descp, state[0].startDate, state[0].endDate);
    console.log("response : ", response);
    navigate("/dashboard")
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Ensure vertical alignment
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        minHeight: "80vh", // Set a minimum height to fill the screen
      }}
      >
      <HomePage />
      <Box component="form" onSubmit={submitHandler} sx={{ mt: 12, ml: 2 }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Add My Vacation
        </Typography>
        <Divider />
        <TextField
          required={true}
          fullWidth={true}
          variant="outlined"
          label="Title"
          id="Vacation-outlined"
          onChange={titleChangeHandler}
          value={title}
          sx={{
            marginBottom: 3,
            marginTop: 6,
          }}
        />
        <TextField
          fullWidth={true}
          variant="outlined"
          label="Description"
          id="Vacation-description-outlined"
          onChange={descpChangeHandler}
          value={descp}
          sx={{
            marginBottom: 6,
            marginTop: 3,
          }}
        />
        <div style={{width: '100%', marginBottom: 10}}>
        <DateRangePicker
          onChange={(item) => {
            console.log("item.selection : ", item.selection),
              setState([item.selection]);
          }}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
        />
        </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Calender;
