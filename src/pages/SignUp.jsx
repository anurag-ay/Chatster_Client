import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
            backgroundColor: "#FF4262",
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
              backgroundColor: "#ff4542",
              border: "0.1em solid white",
              padding: "0.8em",
              width: "10em",
              borderRadius: "2em",
              "&:hover": {
                color: "white",
                border: "0.1em solid white",
                backgroundColor: "#ff4532",
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
          border: "2px solid red",
          backgroundColor: "white",
        }}
      >
        <Stack direction={"column"} spacing={2} alignItems={"center"} p="1em">
          <Typography variant="h3">Create Account</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container columnSpacing="0.5em" rowSpacing="1em">
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} alignItems={"center"}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Confirm password"
                  label="Confirm Password"
                  type="Confirm password"
                />
              </Grid>
            </Grid>
            <Stack alignItems="center">
              <Button
                sx={{
                  mt: "1em",
                  color: "white",
                  backgroundColor: "#ff4542",
                  border: "0.1em solid white",
                  padding: "0.8em",
                  width: "10em",
                  borderRadius: "2em",
                  "&:hover": {
                    color: "white",
                    border: "0.1em solid white",
                    backgroundColor: "#ff4532",
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
