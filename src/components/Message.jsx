import { Box } from '@mui/material'
import React from 'react'

function Message(props) {
  return (<>
    {
    
    props.type==="receive"?
    <Box
    marginRight="auto"
    >
        <span>10:30</span>
        <Box
        maxWidth={"25vw"}
        backgroundColor={"white"}
        sx={{
            borderRadius:"1rem",
            padding:"0.3rem"
        }}>
            <p>{props.message}</p>
         </Box>
   </Box>
   :<Box
    marginLeft="auto"
    >
        <span
        marginLeft="auto"
        >10:30</span>
        <Box
        maxWidth={"25vw"}
        backgroundColor={"white"}
        sx={{
            borderRadius:"1rem",
            padding:"0.3rem"
        }}>
            <p>{props.message}</p>
         </Box>
   </Box>
   }
   </>
  )
}

export default Message
