import React from 'react'
import ChatbodyNav from './ChatbodyNav'
import Chat from './Chat'
import Inputbox from './Inputbox'
import { Box } from '@mui/material'

function Chatbody() {
  return (
    <Box
    sx={{
      // backgroundColor:"black",
      height:"100%",
      maxWidth:"100%",
      // minWidth: "25vw",
    }}
    >
      <ChatbodyNav />
      <Chat />
      <Inputbox/>
    </Box>
  )
}

export default Chatbody
