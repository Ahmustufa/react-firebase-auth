import { Button, Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import {login} from '../components/firebaseMethods'

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user,[e.target.name]: e.target.value });
};
const handleSubmit = ()=>{
    // console.log(user);
    if(user.email, user.password){
      login(user.email, user.password)
    }
}

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
            <TextField label="Email" name="email" onChange={handleChange} />
            <TextField
              label="Password"
              name="password"
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
