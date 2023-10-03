import React, { useState } from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import axios, { registerUserRoute } from "../api/api";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      userName,
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const res = await axios.post(registerUserRoute, payload);
      setUserName("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      const id = res.data._id;
      navigate("/setavatar", { state: { userId: id } });
    } catch (err) {
      console.log(err);
    }
  };

  function handleClickLogin() {
    navigate("/login");
  }

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100vw"}
      height={"100vh"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        height={"80vh"}
        sx={{
          color: "white",
          backgroundColor: "gray",
        }}
      >
        <Stack
          alignItems={"center"}
          direction={"column"}
          spacing={5}
          width={"30vw"}
          height={"80vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          paddingLeft={"2rem"}
          paddingRight={"2rem"}
          sx={{
            backgroundColor: "#44D7B6",
            boxShadow: "#3DC3A5 -5px 5px, #3DC3A5 -10px 10px,  #3DC3A5  -15px 15px, #3DC3A5 -20px 20px, #3DC3A5 -25px 25px"
          }}
        >
          <Typography variant="h2">Welcome Back!</Typography>
          <Typography variant="body2">
            To keep connected with us please login With your personal info
          </Typography>

          <Button
            onClick={handleClickLogin}
            sx={{
              color: "white",
              backgroundColor: "#44D7B6",
              border: "0.1em solid white",
              padding: "0.8em",
              width: "10em",
              borderRadius: "2em",
              "&:hover": {
                color: "#44D7B6",
                border: "0.1em solid white",
                backgroundColor: "#44D7B6",
                boxShadow: "white 0px -23px 25px 0px inset, white 0px -36px 30px 0px inset, white 0px -79px 40px 0px inset,white 0px 2px 1px,#44D7B6 0px 4px 2px, white 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
              },
            }}
            variant="outlined"
          >
            SIGN IN
          </Button>
        </Stack>
      </Box>

      {/* SignUP */}
      <Box
        color={"black"}
        width={"35vw"}
        height={"80vh"}
        alignItems={"center"}
        sx={{
          border: "2px solid #44D7B6",
          backgroundColor: "white",
          // boxShadow:" red 0px 5px 15px",
          boxShadow: " #3DC3A5 5px 5px,  #3DC3A5 10px 10px,#3DC3A5  15px 15px,  #3DC3A5  20px 20px, #3DC3A5 25px 25px",
          color:"#44D7B6"
          
        }}
      >
        <Stack direction={"column"} spacing={2} alignItems={"center"} p="1em">
          <Typography variant="h3">Create Account</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3, color: "#FF4262" }}
          >
            <Grid container columnSpacing="0.5em" rowSpacing="1em">
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="User Name"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} alignItems={"center"}>
                <TextField
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="Confirm password"
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
            <Stack alignItems="center">
              <Button
                type="submit"
                sx={{
                  mt: "1em",
                  color: "white",
                  backgroundColor: "#44D7B6",
                  border: "0.1em solid white",
                  padding: "0.8em",
                  width: "10em",
                  borderRadius: "2em",
                  "&:hover": {
                    color: "white",
                    border: "0.1em solid white",
                    backgroundColor: "#44D7B6",
                    boxShadow: "#44D7B6 0px -23px 25px 0px inset, #44D7B6 0px -36px 30px 0px inset, #44D7B6 0px -79px 40px 0px inset,#44D7B6 0px 2px 1px,#44D7B6 0px 4px 2px, #44D7B6 0px 8px 4px, rgba(0, 0, 0, 0.09)  0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                  },
                }}
                variant="outlined"
              >
                SIGN UP
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default SignUp;
