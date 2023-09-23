import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  function handleClickSignup() {
    navigate("/signup");
  }
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"center"}
      width={"100vw"}
      height={"100vh"}
    >
      <Stack
        flexDirection="row"
        sx={{
          color: "white",
          backgroundColor: "gray",
        }}
      >
        {/* Sign */}
        <Stack
          color={"black"}
          width={"30vw"}
          direction={"column"}
          alignItems={"center"}
          sx={{
            border: "2px solid red",
            backgroundColor: "white",
            p: "1em",
          }}
        >
          <Box m="3em">
            <Typography variant="h3">Sign In</Typography>
          </Box>
          <Stack justifyContent="center">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: "1.8em" }}>
              <Grid container gap="1em">
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userName"
                    label="User Name or Email"
                    name="userName"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Stack alignItems="center">
                <Button
                  sx={{
                    mt: "1em",
                    color: "white",
                    backgroundColor: "#ff4542",
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
          </Stack>
        </Stack>

        {/* Welcome Screen */}
        <Box
          width={"30vw"}
          height={"80vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingLeft={"2rem"}
          paddingRight={"2rem"}
          sx={{
            backgroundColor: "#FF4262",
          }}
        >
          <Stack alignItems={"center"} direction={"column"} spacing={5}>
            <Typography variant="h2">Hello, Friend!</Typography>
            <Typography variant="body2">
              Enter your personal details and start Journey with us
            </Typography>

            <Button
              onClick={handleClickSignup}
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
              SIGN UP
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default LogIn;
