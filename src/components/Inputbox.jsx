import React from 'react'
import { Box, Button, Stack,TextField } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CollectionsIcon from '@mui/icons-material/Collections';

function Inputbox() {
  return (
    <Box position={"sticky"}
    sx={{
      maxWidth:"73vw",
      minWidth: "25vw",
    }}
    top={"100%"}
    >
        <TextField fullWidth label="Type a message here....." variant="outlined" />
      <Box sx={{
      
      display:"flex",
      justifyContent:"space-between",
      paddingTop:"1rem"
    
     }}>
      <Stack 
      direction={"row"}
      spacing={3}
      >
        <AttachFileIcon/>
        <CameraAltIcon/>
        <KeyboardVoiceIcon/>
        <CollectionsIcon/>
      </Stack>
      <Button variant="contained" >Reply</Button>
     </Box>
    </Box>
  )
}

export default Inputbox
