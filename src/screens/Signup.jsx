import { Button, Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { register } from "../components/firebaseMethods";
import { useSelector, useDispatch } from "react-redux";
function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [state, setState] = useState(false);
  const [field, setField] = useState(true);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setField(false);
  };
  const handleSubmit = () => {
    console.log(user);
    if (user.email && user.name && user.password) {
      if (user.email.length > 10) {
        if (user.password.length > 5) {
          register(user.email, user.password);
          setState(false);
        } else {
          setMessage("Password should have atleast 6 characters");
        }
      } else {
        setMessage("incorrect email format");
      }
    } else {
      setState(true);
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
            <TextField
              required
              error={field}
              label="Name"
              name="name"
              onChange={handleChange}
            />
            <TextField
              required
              type="email"
              error={field}
              label="Email"
              name="email"
              onChange={handleChange}
            />
            <TextField
              required
              error={field}
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
            {state ? <p>{message}</p> : ""}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
