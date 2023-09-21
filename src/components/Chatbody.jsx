import React from "react";
import ChatbodyNav from "./ChatbodyNav";
import Chat from "./Chat";
import Inputbox from "./Inputbox";
import { Box } from "@mui/material";

function Chatbody() {
  return (
    <Box>
      <ChatbodyNav />
      <Chat />
      <Inputbox />
    </Box>
  );
}

export default Chatbody;
