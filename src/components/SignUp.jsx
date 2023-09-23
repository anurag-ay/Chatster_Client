import React from 'react'
import {Typography,Box, Stack, Button} from '@mui/material'


import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme();
function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
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
      Width={"100%"}
      height={"80vh"}
      sx={{
        color:"white",
        backgroundColor:"gray"
      }}>
          
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
              backgroundColor:"#FF4262"
            }}
      >
        <Stack
       alignItems={"center"}
        direction={"column"}
        spacing={5}
        >
                      <Typography variant='h2'>Welcome Back!</Typography>
            <Typography variant='body2'>To keep connected with us please login
With your personal info</Typography>

<Button  sx={{color:"white",backgroundColor:"#ff4542",border:"0.1em solid white",padding:"0.8em",width:"10em",borderRadius:"2em","&:hover":{color:"white",border:"0.1em solid white",backgroundColor:"#ff4532"} }}variant="outlined">SIGN IN</Button>
        </Stack>

      </Box>
      <Box
      color={"black"}
                  width={"30vw"}
                  height={"80vh"}
                  alignItems={"center"}
                  sx={{
                    border:"2px solid red",
                    backgroundColor:"white"
                  }}
      >
        <Stack
        direction={"column"}
        spacing={2}
        alignItems={"center"}
        >
         <Typography variant='h3'>Create Account</Typography>
         <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name" 
                  name="userName"
                />
              </Grid>
              <Grid item xs={12} sm={6}alignItems={"center"}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
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
                  id="email"
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
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

            </Grid>
           
<Button  sx={{color:"white",backgroundColor:"#ff4542",border:"0.1em solid white",padding:"0.8em",width:"10em",borderRadius:"2em","&:hover":{color:"white",border:"0.1em solid white",backgroundColor:"#ff4532"} }}variant="outlined">SIGN UP</Button>
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Stack>
      </Box>
      </Box>
    </Box>
  )
}

export default SignUp
