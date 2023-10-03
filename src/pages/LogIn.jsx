import React, { useState } from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import axios, { logInRoute } from "../api/api";
import useMediaQuery from "@mui/material/useMediaQuery";

function LogIn() {
  const singInWidth_sm = useMediaQuery("(min-width:414px)");

  const navigate = useNavigate();

  const [authWith, setauthWith] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      authWith,
      password,
    };
    try {
      const res = await axios.post(logInRoute, payload);
      if (res.status === 200) {
        const token = res.data;
        localStorage.setItem("token", token);
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleClickSignup() {
    navigate("/signup");
  }
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        backgroundColor: "#288672",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Stack
        flexDirection="row"
        sx={{
          color: "white",
          boxShadow: "0em 0em  2em #313131",
        }}
      >
        {/* Sign */}
        <Stack
          flex="1 0"
          color={"black"}
          width={"30vw"}
          direction={"column"}
          alignItems={"center"}
          sx={{
            border: "2px solid #3DC3A5",
            backgroundColor: "#bbf1e5",
            p: "1em",
          }}
        >
          <Box m="3em">
            <Typography color={"#0c372d"} variant="h3">
              Sign In
            </Typography>
          </Box>
          <Stack justifyContent="center">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: "1.8em" }}>
              <Grid container gap="1em">
                <Grid item xs={12}>
                  <TextField
                    name="userName"
                    label="User Name or Email"
                    value={authWith}
                    onChange={(e) => setauthWith(e.target.value)}
                    required
                    fullWidth
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    backgroundColor: "#0c372d",
                    padding: "0.8em",
                    width: "10em",
                    borderRadius: "2em",
                    "&:hover": {
                      color: "white",
                      border: "0.1em solid white",
                      boxShadow:
                        "#44D7B6 0px -23px 25px 0px inset, #44D7B6 0px -36px 30px 0px inset, #44D7B6 0px -79px 40px 0px inset,#44D7B6 0px 2px 1px,#44D7B6 0px 4px 2px, #44D7B6 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
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
        {singInWidth_sm && (
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
              backgroundColor: "#0c372d",
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
                  backgroundColor: "#44D7B6",
                  border: "0.1em solid white",
                  padding: "0.8em",
                  width: "10em",
                  borderRadius: "2em",
                  "&:hover": {
                    color: "#44D7B6",
                    border: "0.1em solid white",
                    backgroundColor: "#44D7B6",
                    boxShadow:
                      "white 0px -23px 25px 0px inset, white 0px -36px 30px 0px inset, white 0px -79px 40px 0px inset,white 0px 2px 1px,#44D7B6 0px 4px 2px, white 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                  },
                }}
                variant="outlined"
              >
                SIGN UP
              </Button>
            </Stack>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

export default LogIn;
