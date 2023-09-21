import React from 'react'
import{ Box, Stack, Typography} from '@mui/material'
import { Avatar } from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import img from './end-call-icon-9.jpg'
function call() {
  return (
    <Box
    display={"flex"}
    flexDirection={"column"}
    maxWidth={"100vw"}
   height={"100vh"}
    sx={{
        backgroundColor:"green"
      }}
    >
      <Box
      maxWidth={"100vw"}
      height={"90vh"}
   
      sx={{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"gray",
        justifyContent:"center",
        alignItems:"center"
      }}
      >
      <Avatar  alt="Remy Sharp" src="https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation.jpg" />
      <Typography variant='h6'>Saifur Rahman Rana</Typography>
    <Typography variant='p'>Ringing...</Typography>
      </Box>
      <Box
            maxWidth={"100vw"}
            height={"10vh"}
            sx={{
                display:"sticky",
 
                backgroundColor:"yellow",
                marginTop:"auto"
              }}
      >
        
        <Stack
         height={"10vh"}
         spacing={3}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        >
    <PersonAddAltIcon/>
    <VideocamIcon/>
    <MicIcon/>
    <MoreHorizIcon/>
    <img
    width={"50rem"}
    height={"50rem"}
    src={img} alt="img"/>
        </Stack>
     </Box>
    </Box>
  )
}

export default call
