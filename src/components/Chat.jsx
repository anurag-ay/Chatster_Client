import { Stack } from '@mui/material'
import React from 'react'
import Message from './Message'

function Chat() {
  return (
    <div>
      
      <Stack
      direction={"column"}
      overflow={"scroll"}
      sx={{
        p: "1em 1em 0em 1em",
        height: "60vh",
        maxWidth:"73vw",
        minWidth: "25vw",
        backgroundColor:"gray",
        overflow:"scroll"
      }}
      >
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="send"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="receive"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="send"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="receive"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="send"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="send"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="receive"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="send"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="receive"/>
        <Message message= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia." type="send"/>
      </Stack>
    </div>
  )
}

export default Chat
