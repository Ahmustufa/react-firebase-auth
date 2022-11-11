import { Button, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { login } from "../components/firebaseMethods";
import {useNavigate} from 'react-router-dom'
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [field, setField] = useState(true);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (user.email && user.password) {
      if (user.email.length > 10) {
        if (user.password.length > 5) {
          login(user.email, user.password);
          navigate('/')
        } else {
          setMessage("Password should have atleast 6 characters");
        }
      } else {
        setMessage("incorrect email format");
      }
    } else {
      setMessage("The fields cannot be empty");
      console.log("enter value");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={3}>
          <Stack spacing={3}>
            <Typography textAlign="center" variant="h2">
              Login
            </Typography>
            <TextField
              label="Email"
              name="email"
              error={field}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              helperText={message}
              onChange={handleChange}
              error={field}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
