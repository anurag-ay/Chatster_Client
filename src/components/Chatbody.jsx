import React, { useState } from "react";
import ChatbodyNav from "./ChatbodyNav";
import Chat from "./Chat";
import Inputbox from "./Inputbox";
import { Box } from "@mui/material";

function Chatbody() {
  const [postedChat, setPostedChat] = useState();
  return (
    <Box>
      <ChatbodyNav />
      <Chat postedChat={postedChat} />
      <Inputbox setPostedChat={setPostedChat} />
    </Box>
  );
}

export default Chatbody;
