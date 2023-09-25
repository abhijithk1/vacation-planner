import { Alert, Box, Button, FormControlLabel, TextField } from "@mui/material";
import { SignUpFormElements } from "./SignUpFormElements";
import { useState } from "react";

const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isConfirmErrorPassword, setIsConfirmErrorPassword] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setFormIsValid(isErrorEmail && isErrorPassword);
  };

  const passowordChangeHandler = (event) => {
    setPassword(event.target.value);
    setFormIsValid(isErrorEmail && isErrorPassword && isConfirmErrorPassword);
  };

  const confirmPassowordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
    setFormIsValid(!(isErrorEmail && isErrorPassword && isConfirmErrorPassword));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!(isErrorEmail && isErrorPassword && isConfirmErrorPassword)) {
      console.log(email, " - ", password);
      props.onSignUp(email,password)
    }
  };

  const emailValidateHandler = () => {
    if (!email.includes("@")) {
      setIsErrorEmail(true);
    } else {
      setIsErrorEmail(false);
    }
  };

  const passwordValidateHandler = () => {
    if (!(password.trim().length > 6)) {
      setIsErrorPassword(true);
    } else {
      setIsErrorPassword(false);
    }
  };

  const confirmPasswordValidateHandler = () => {
    console.log("confirm : ", confirmPassword, "pass : ", password);
    if (!(confirmPassword === password)) {
      setIsConfirmErrorPassword(true);
    } else {
      setIsConfirmErrorPassword(false);
    }
  };

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
        {...SignUpFormElements[0]}
        onChange={emailChangeHandler}
        onBlur={emailValidateHandler}
        sx={{
          marginBottom: 1,
          marginTop: 2,
        }}
      />
      {isErrorEmail && <Alert severity="error">email should contain '@' character </Alert>}
      <TextField
        error={isErrorPassword}
        {...SignUpFormElements[1]}
        onChange={passowordChangeHandler}
        onBlur={passwordValidateHandler}
        sx={{
          marginBottom: 1,
          marginTop: 2,
        }}
      />
      {isErrorPassword && <Alert severity="error">password should contain atleast 6 characters</Alert>}
      <TextField
        error={isConfirmErrorPassword}
        {...SignUpFormElements[2]}
        onChange={confirmPassowordChangeHandler}
        onBlur={confirmPasswordValidateHandler}
        sx={{
          marginBottom: 1,
          marginTop: 2,
        }}
      />
      {isConfirmErrorPassword && <Alert severity="error">passwords are in mismatch</Alert>}
      {props.alert && <Alert severity="error">Something's wrong try again</Alert>}
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
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpForm;
