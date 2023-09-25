import { Avatar, Box, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginForm from "./LoginForm";
import CopyRight from "../../components/common/CopyRight";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginCall } from "./service";

const LoginPage = () => {

  const [isIncorrectData, setIsIncorrectData] = useState(false)
  const navigate = useNavigate()

  const loginHandler = async (email,password) => {
      // rememberMe(checked)
      const response = await loginCall(email,password)
      console.log("response : ",response)

      if ((response.error)) {
        setIsIncorrectData(true)
      } else {
        setIsIncorrectData(false)
        localStorage.setItem('token',JSON.stringify(response.token))
        navigate('/dashboard')
      }
  }

  // const rememberMe = (checked) => {
  //     if (checked) {
  //         console.log("chaching the data")
  //     }
  //     else {
  //         console.log("not chaching the data")
  //     }
  // }

  const boxStyles = {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }

  const avatarStyles = {
    bgcolor: "#9c27b0",
    width: "40px",
    height: "40px",
    margin: 1,
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={boxStyles}
      >
        <Avatar sx={avatarStyles}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant="h5" >Sign In</Typography>
        <LoginForm onLogin={loginHandler} alert={isIncorrectData}/>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default LoginPage;
