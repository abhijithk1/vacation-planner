import { Avatar, Box, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpCall } from "./service";

const SignUpPage = () => {
  const [isIncorrectData, setIsIncorrectData] = useState(false)
  const navigate = useNavigate()

  const signUpHandler = async (email,password) => {
      // rememberMe(checked)
      const response = await signUpCall(email,password)
      console.log("response : ",response)

      if ((response.error)) {
        setIsIncorrectData(true)
      } else {
        setIsIncorrectData(false)
        navigate('/login')
      }
  }

 return (
 <Container maxWidth="xs">
 <Box
   sx={{
     marginTop: 8,
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
   }}
 >
   <Avatar sx={{
       bgcolor: "#9c27b0",
       width: "40px",
       height: "40px",
       margin: 1,
   }}>
       <LockOutlinedIcon />
   </Avatar>
   <Typography component='h1' variant="h5" >Sign Up</Typography>
   <SignUpForm onSignUp={signUpHandler} alert={isIncorrectData}/>
 </Box>
</Container>)
}

export default SignUpPage;