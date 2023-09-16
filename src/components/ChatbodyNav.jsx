import { Box, Avatar, Typography, Stack } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import React from 'react'

function ChatbodyNav() {
  return (
    <Box
    position={"sticky"}
    sx={{  
      margin:"0",
      display:"flex",
      height:"1rem",
      maxWidth:"73vw",
      minWidth: "25vw",
      padding:"2rem",
      backgroundColor:"#F9F9FA",
      alignItems:"center",
      justifyContent:"space-between"
  }}
    >
        <Box display={"flex"}
        alignItems="center"
        >
            <Avatar  alt="Remy Sharp" src="https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation.jpg" />
            <Box
            marginLeft={"1rem"}
            >
                <Typography variant='h6'>Saifur Rahman Rana</Typography>
                <Typography variant='p'>Life is how you think of it</Typography>
            </Box>
        </Box>
      <Stack
      spacing={2}
      direction={"row"}
      >
        <PhoneInTalkIcon/>
        <PersonAddAltIcon/>
        <VideoCallIcon/>
      </Stack>
    </Box>
  )
}

export default ChatbodyNav
