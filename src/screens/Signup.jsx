import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { register } from "../components/firebaseMethods";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
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
          setOpen(true);
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
  const handleClose = () => setOpen(false);
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
          <Typography textAlign="center" variant="h2">SignUp</Typography>
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
              helperText={message}
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>

            <Modal
              open={open}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  flexDirection: "column",
                  height: "400px",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img src={require("../assets/no-bd-preview.png")} />
                <Typography>
                  <Link style={{ color: "black" }} to="/login">
                    Login
                  </Link>{" "}
                  to access Dashboard
                </Typography>
              </Box>
            </Modal>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
