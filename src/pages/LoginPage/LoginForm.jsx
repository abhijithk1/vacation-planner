import {
  Alert,
  Box,
  Button,
  // Checkbox,
  // FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { loginFormElements } from "./loginFormElements";

const LoginForm = (props) => {
  // const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const [isErrorPassword, setIsErrorPassword] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
    setFormIsValid(isErrorEmail && isErrorPassword)
  }

  const passowordChangeHandler = (event) => {
    setPassword(event.target.value)
    setFormIsValid(!(isErrorEmail && isErrorPassword))
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email," - ",password, " - ")
    props.onLogin(email,password)
  };

  // const checkHandler = (event) => {
  //   setChecked(event.target.checked);
  // };

  const emailValidateHandler = () => {
    if (!email.includes('@')) {
        setIsErrorEmail(true)
    } else {
        setIsErrorEmail(false)
    }
  }

  const passwordValidateHandler = () => {
    if (!(password.trim().length > 6)) {
        setIsErrorPassword(true)
    } else {
        setIsErrorPassword(false)
    }
  }

  console.log("isForm valid: ",formIsValid )

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        marginTop: 1,
      }}
      noValidate
    >
      <TextField
        error={isErrorEmail}
        {...loginFormElements[0]}
        value={email}
        onChange={emailChangeHandler}
        // onBlur={emailValidateHandler}
        sx={{
          marginBottom: 1,
          marginTop: 2,
        }}
      />
      {isErrorEmail && <Alert severity="error">email should contain '@' character </Alert>}
      <TextField
        error={isErrorPassword}
        {...loginFormElements[1]}
        value={password}
        onChange={passowordChangeHandler}
        onBlur={passwordValidateHandler}
        sx={{
          marginBottom: 1,
          marginTop: 2,
        }}
      />
      {isErrorPassword && <Alert severity="error">password should contain atleast 6 characters</Alert>}
      {/* <FormControlLabel
        control={<Checkbox checked={checked} onChange={checkHandler} />}
        label="Remember me"
      /> */}
      {props.alert && <Alert severity="error">username or password is incorrect</Alert>}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={!formIsValid}
        sx={{
          mt: 3,
          mb: 2,
        }}
      >
        Sign In
      </Button>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={4}>
        <Link href="#" variant="body2">Forgot Password?</Link>
        </Grid>
        <Grid item >
        <Link href={'/signup'} variant="body2">Don't have an account? Sign Up</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
